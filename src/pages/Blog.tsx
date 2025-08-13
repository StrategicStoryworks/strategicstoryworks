import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, ExternalLink, ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  guid: string;
  thumbnail?: string;
  excerpt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Use a CORS proxy to fetch the RSS feed
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            'https://strategicstoryworks.substack.com/feed'
          )}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
          const formattedPosts = data.items.map((item: any) => {
            // Extract image from content
            const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
            const thumbnail = imgMatch ? imgMatch[1] : item.thumbnail;
            
            // Create better excerpt
            const cleanText = item.description?.replace(/<[^>]*>/g, '') || '';
            const excerpt = cleanText.length > 300 ? cleanText.substring(0, 300) + '...' : cleanText;
            
            return {
              title: item.title,
              link: item.link,
              pubDate: item.pubDate,
              description: item.description,
              content: item.content,
              guid: item.guid,
              thumbnail,
              excerpt
            };
          });
          setPosts(formattedPosts);
        } else {
          throw new Error('RSS feed parsing failed');
        }
      } catch (err) {
        setError('Unable to load blog posts. Please try again later.');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Strategic Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert guidance on school communications, strategic messaging, and building stronger 
              relationships between schools and communities.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://strategicstoryworks.substack.com/subscribe', '_blank')}
              className="text-lg px-8 py-6"
            >
              Subscribe to Our Newsletter
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="text-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading latest insights...</p>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">{error}</p>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://strategicstoryworks.substack.com', '_blank')}
                >
                  Visit Our Substack
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No posts available yet.</p>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://strategicstoryworks.substack.com', '_blank')}
                >
                  Visit Our Substack
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ) : (
                <div className="space-y-8">
                {posts.map((post, index) => (
                  <Card key={post.guid || index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {post.thumbnail && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.thumbnail} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(post.pubDate)}
                      </div>
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => window.open(post.link, '_blank')}
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get strategic insights delivered directly to your inbox. Join superintendents and board 
              members who trust our expertise.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://strategicstoryworks.substack.com/subscribe', '_blank')}
              className="text-lg px-8 py-6"
            >
              Subscribe Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;