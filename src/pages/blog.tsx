import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { BLOG_POSTS } from '../constants'

export const blogPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">Tax Tips & Insights</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            Expert tax advice, IRS updates, and strategies to help you save money and stay compliant.
          </p>
        </div>
      </section>

      <section class="py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <a href={`/blog/${post.slug}`} class="bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all overflow-hidden group">
                <div class="bg-gradient-to-br from-blue-100 to-emerald-100 h-48 flex items-center justify-center">
                  <i class="fa-solid fa-newspaper text-blue-950/20 text-6xl group-hover:scale-110 transition-transform"></i>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span class="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors font-space">{post.title}</h3>
                  <p class="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-400">{post.date}</span>
                    <span class="text-emerald-600 text-sm font-semibold">Read More →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Blog & Tax Tips', description: 'Expert tax advice, IRS updates, and financial strategies from the Eugene Solutions LLC team.' }
  )
}

export const blogPostPage = (c: Context) => {
  const slug = c.req.param('slug')
  const post = BLOG_POSTS.find(p => p.slug === slug)
  
  if (!post) {
    return c.render(
      <div>
        <Navbar />
        <section class="py-40 text-center">
          <h1 class="text-4xl font-black text-gray-900 mb-4 font-space">Post Not Found</h1>
          <p class="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" class="inline-flex items-center bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl">
            <i class="fa-solid fa-arrow-left mr-2"></i> Back to Blog
          </a>
        </section>
        <Footer />
      </div>,
      { title: 'Post Not Found' }
    )
  }

  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-4xl mx-auto px-4">
          <a href="/blog" class="inline-flex items-center text-blue-300 hover:text-white mb-6 text-sm">
            <i class="fa-solid fa-arrow-left mr-2"></i> Back to Blog
          </a>
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full">{post.category}</span>
            <span class="text-xs text-blue-300">{post.readTime}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-black text-white mb-4 font-space">{post.title}</h1>
          <div class="flex items-center text-blue-300 text-sm">
            <span>{post.author}</span>
            <span class="mx-2">&bull;</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <p class="text-blue-900 font-medium">
                <i class="fa-solid fa-lightbulb text-blue-500 mr-2"></i>
                This article is provided for general informational purposes by Eugene Solutions LLC. For personalized tax advice, please schedule a consultation with one of our licensed tax professionals.
              </p>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6">
              The full content of this article would be loaded from your CMS or database in production. Eugene Solutions LLC publishes regular tax tips, IRS updates, and financial planning strategies to help our clients make informed decisions.
            </p>
            <p class="text-gray-600 leading-relaxed mb-6">
              For personalized guidance on your specific tax situation, contact our team at <a href="/contact" class="text-emerald-600 font-semibold hover:underline">Eugene Solutions LLC</a> or call us at <a href="tel:(555) 394-8362" class="text-emerald-600 font-semibold hover:underline">(555) 394-8362</a>.
            </p>
          </div>

          {/* Compliance disclaimer */}
          <div class="mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p class="text-xs text-gray-500 italic">
              <strong>IRS Circular 230 Disclosure:</strong> {post.author} and Eugene Solutions LLC provide this content for general informational purposes. It does not constitute tax advice. Individual tax situations vary. Consult a qualified tax professional for advice specific to your circumstances.
            </p>
          </div>

          {/* Related posts */}
          <div class="mt-16">
            <h2 class="text-2xl font-black text-gray-900 mb-6 font-space">Related Articles</h2>
            <div class="grid md:grid-cols-2 gap-6">
              {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2).map((p) => (
                <a href={`/blog/${p.slug}`} class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-emerald-200 transition-all">
                  <span class="text-xs font-bold text-emerald-600 mb-2 block">{p.category}</span>
                  <h3 class="font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p class="text-gray-500 text-sm">{p.date}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: post.title, description: post.excerpt }
  )
}
