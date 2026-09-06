import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/services';
import { clientStories } from '@/lib/clientStories';
import { processSteps } from '@/lib/process';
import { getPosts, Post, urlFor } from '@/lib/sanity';
import {
  FiArrowRight,
  FiLayout,
  FiCode,
  FiSearch,
  FiFeather,
  FiZap,
  FiMessageSquare,
  FiCheckCircle,
} from 'react-icons/fi';

export const revalidate = 60; // ISR for Sanity posts

export default async function HomePage() {
  const posts: Post[] = await getPosts().catch(() => []);
  const previewPosts = posts.slice(0, 3);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'website-design':
        return <FiLayout />;
      case 'code-development':
        return <FiCode />;
      case 'seo-foundations':
        return <FiSearch />;
      case 'brand-identity':
        return <FiFeather />;
      case 'performance-optimization':
        return <FiZap />;
      case 'ai-whatsapp-automation':
        return <FiMessageSquare />;
      default:
        return <FiLayout />;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main>
      {/* ====== 1. HERO SECTION ====== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true"></span>
              <span>Available for new startup &amp; enterprise projects</span>
            </div>

            <h1 className="hero-title">
              Websites built for what&apos;s next.
            </h1>

            <p className="hero-sub">
              We design and develop fast, focused websites for startups and growing companies. From brand identity to SEO foundations and practical automation, we help ambitious businesses create an authoritative digital presence.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Start a project</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn-outline btn-large">
                <span>Explore services</span>
              </Link>
            </div>

            {/* Restrained Hero Visual Panel */}
            <div className="hero-visual">
              <div className="browser-bar">
                <span className="browser-dot" aria-hidden="true"></span>
                <span className="browser-dot" aria-hidden="true"></span>
                <span className="browser-dot" aria-hidden="true"></span>
                <span className="browser-url">webitup24.com/studio</span>
              </div>
              <div className="hero-visual-inner">
                <div className="hero-feature-card">
                  <div className="hero-feature-icon" aria-hidden="true">
                    <FiLayout />
                  </div>
                  <h3>Modern Architecture</h3>
                  <p>Next.js and React foundations built for swift performance and maintainability.</p>
                </div>
                <div className="hero-feature-card">
                  <div className="hero-feature-icon" aria-hidden="true">
                    <FiSearch />
                  </div>
                  <h3>SEO Foundations</h3>
                  <p>Semantic markup, schema structure, and indexing readiness built in from day one.</p>
                </div>
                <div className="hero-feature-card">
                  <div className="hero-feature-icon" aria-hidden="true">
                    <FiZap />
                  </div>
                  <h3>Conversion Focused</h3>
                  <p>Clean visual hierarchy and purposeful messaging that turns visitors into enquiries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 2. SHORT VALUE / TRUST STATEMENT ====== */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-lead">
              <span>Why Teams Work With Us</span>
            </div>
            <div className="trust-statement">
              We combine thoughtful design, clean code development, and reliable execution. No template shortcuts, no unneeded complexity—just disciplined digital systems engineered to help your business grow.
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3. SERVICES OVERVIEW ====== */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Core Capabilities</span>
            <h2 className="section-title">Disciplines built for modern companies</h2>
            <p className="section-subtitle">
              We provide six core services tailored to startups, tech firms, and expanding international brands.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-top">
                  <span className="service-num">{service.number}</span>
                  <div className="service-icon-wrap" aria-hidden="true">
                    {getServiceIcon(service.id)}
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <div className="service-deliverables">
                  {service.whatClientReceives.slice(0, 2).map((item, i) => (
                    <div key={i} className="deliverable-item">
                      <span className="deliverable-bullet" aria-hidden="true"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-outline">
              <span>View detailed services &amp; deliverables</span>
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== 4. SIX COMBINED CLIENT STORIES / TESTIMONIALS ====== */}
      <section className="client-stories-section" id="client-stories">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Selected Work &amp; Feedback</span>
            <h2 className="section-title">Client stories &amp; project outcomes</h2>
            <p className="section-subtitle">
              Explore how we help founders, tech teams, and international businesses build sharp, dependable digital systems.
            </p>
          </div>

          <div className="stories-grid">
            {clientStories.map((story) => (
              <div key={story.id} className="story-card">
                {/* Visual Preview / Placeholder Frame */}
                <div className="story-preview">
                  <div className="story-placeholder-screen">
                    <span className="placeholder-badge">Project Preview</span>
                    <span className="placeholder-meta">{story.industry}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="story-content">
                  <div className="story-meta-tags">
                    <span className="story-industry">{story.industry}</span>
                    {story.services.map((svc, idx) => (
                      <span key={idx} className="story-service-tag">{svc}</span>
                    ))}
                  </div>

                  <h3 className="story-title">{story.projectName}</h3>
                  <p className="story-desc">{story.description}</p>

                  {/* Combined Testimonial Box */}
                  <div className="story-quote-box">
                    <p className="story-quote">&ldquo;{story.testimonial}&rdquo;</p>
                    <div className="story-client">
                      <span className="client-name">{story.clientName}</span>
                      <span className="client-role">{story.clientRole}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 5. PROCESS SECTION ====== */}
      <section className="process-section" id="process">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">A transparent five-step delivery model</h2>
            <p className="section-subtitle">
              Clear stages, open communication, and predictable milestones from initial concept to launch.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.number} className="process-card">
                <div className="process-step-num">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="process-deliverable-note">
                  <strong>Output:</strong> {step.deliverables}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 6. ABOUT / AGENCY POSITIONING ====== */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-split">
            <div className="about-text">
              <span className="section-label">About the Studio</span>
              <h2>Built for founders who value quality and speed</h2>
              <p>
                Web It Up 24 is an independent web design and development studio working with clients worldwide. We specialize in building fast, scalable websites, cohesive brand identities, and practical digital automation for companies ready for their next stage of growth.
              </p>
              <div className="about-values-list">
                <div className="about-value-item">
                  <div className="about-value-icon" aria-hidden="true">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <h4>Direct, transparent communication</h4>
                    <p>No account manager middlemen or convoluted agency tiers. You work directly with developers and designers who build your product.</p>
                  </div>
                </div>
                <div className="about-value-item">
                  <div className="about-value-icon" aria-hidden="true">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <h4>Modern, clean code standards</h4>
                    <p>We build with Next.js, React, and TypeScript—writing accessible, production-grade code that your internal team can easily maintain.</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/about" className="btn btn-outline">
                  <span>Learn more about our agency</span>
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="about-side-panel">
              <div className="about-panel-stat">
                <span className="stat-label">Focus Area</span>
                <div className="stat-headline">Startups, SaaS &amp; Growth Businesses</div>
              </div>
              <div className="about-panel-stat">
                <span className="stat-label">Coverage</span>
                <div className="stat-headline">International &amp; Remote Teams</div>
              </div>
              <div className="about-panel-stat">
                <span className="stat-label">Engineering Stack</span>
                <div className="stat-headline">Next.js · React · TypeScript · Sanity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 7. BLOG PREVIEW (SANITY POWERED) ====== */}
      <section className="blog-section" id="journal">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Journal &amp; Insights</span>
            <h2 className="section-title">Thoughts on web engineering and growth</h2>
            <p className="section-subtitle">
              Practical notes on design systems, frontend performance, and building effective digital products.
            </p>
          </div>

          {previewPosts.length === 0 ? (
            <div className="blog-empty-state">
              <p>New ideas are on the way. Check back soon.</p>
              <Link href="/contact" className="btn btn-outline">
                <span>Start a conversation</span>
              </Link>
            </div>
          ) : (
            <div className="blog-grid">
              {previewPosts.map((post) => {
                const imageSrc = post.mainImage ? urlFor(post.mainImage).width(700).url() : null;
                const avatarSrc = post.authorImage ? urlFor(post.authorImage).width(80).url() : null;

                return (
                  <article key={post._id} className="blog-card">
                    <Link href={`/blog/${post.slug.current}`} className="blog-card-img-wrap" aria-label={`Read article: ${post.title}`}>
                      {imageSrc ? (
                        <div
                          className="blog-card-img"
                          style={{ backgroundImage: `url('${imageSrc}')` }}
                        />
                      ) : (
                        <div
                          className="blog-card-img"
                          style={{ backgroundColor: 'var(--surface-muted)' }}
                        />
                      )}
                    </Link>
                    <div className="blog-card-content">
                      <span className="blog-card-meta">{formatDate(post.publishedAt)}</span>
                      <Link href={`/blog/${post.slug.current}`}>
                        <h3>{post.title}</h3>
                      </Link>
                      <p className="blog-card-excerpt">
                        {post.excerpt || 'Read the complete article for technical takeaways and strategic insights.'}
                      </p>
                      <div className="blog-card-footer">
                        {avatarSrc ? (
                          <div
                            className="blog-author-avatar"
                            style={{ backgroundImage: `url('${avatarSrc}')` }}
                          />
                        ) : (
                          <div
                            className="blog-author-avatar"
                            style={{ backgroundColor: 'var(--accent)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}
                          >
                            W
                          </div>
                        )}
                        <span className="blog-author-name">{post.authorName || 'Web It Up 24'}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {previewPosts.length > 0 && (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/blog" className="btn btn-outline">
                <span>Read all journal articles</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ====== 8. FINAL CONTACT CTA ====== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-panel">
            <h2 className="cta-title">Ready to build what&apos;s next?</h2>
            <p className="cta-desc">
              Whether you are preparing for a launch, rebuilding an existing product, or need a stronger digital foundation, we are ready to partner with you.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Start a project</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn-outline btn-large">
                <span>Explore all services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
