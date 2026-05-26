import Footer from '../components/layout/Footer/Footer';
import FloatingContact from '../components/layout/FloatingContact/FloatingContact';
import Header from '../components/layout/Header/Header';
import ContactSection from '../features/contact/ContactSection';
import HomeSection from '../features/home/HomeSection';
import MenuSection from '../features/menu/MenuSection';

function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <HomeSection />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
