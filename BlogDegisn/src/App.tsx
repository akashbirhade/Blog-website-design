
import React from 'react';
import Navbar from './component/Navbar';
import FeaturedPost from './component/FeaturedPost';
import PostCard from './component/PostCard';
import BlogContent from './component/BlogContent';
import About from './component/About';
import Archives from './component/Archives';
import BlogPost from './component/BlogPost';
import Elsewhere from './component/Elsewhere';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container">
        <FeaturedPost />
        <div className="row mb-2">
          <PostCard title="Featured post" date="Nov 12" category="World" description="This is a wider card with supporting text below as a natural lead-in to additional content." />
          <PostCard title="Post title" date="Nov 11" category="Design" description="This is a wider card with supporting text below as a natural lead-in to additional content." />
        </div>
        <div className="row g-5">
          <div className="col-md-8">
            <BlogContent />
            <hr />
            <BlogPost
              title="Another blog post"
              date="December 23, 2013"
              author="Jacob"
              content="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
            />
            <BlogPost
              title="New feature"
              date="December 14, 2013"
              author="Chris"
              content="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue."
            />
            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Older</a>
              <a className="btn btn-outline-secondary" href="#">Newer</a>
            </nav>
          </div>
          <div className="col-md-4">
            <About />
            <Archives />
            <Elsewhere />

          </div>
        </div>
      </main>
      <footer className="blog-footer">
        <p>
          Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
