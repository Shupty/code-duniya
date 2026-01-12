import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Quality from "./components/quality/Quality";
import Video from "./components/video/Video";

const App = () => {
  return (
    <main>
      <Header />
      <section className="relative">
        <Banner />
        <Category />
      </section>
      <Courses/>
      <Quality/>
      <Video/>
      <Footer/>
    </main>
  );
};

export default App;
