import React from "react";
import { Container } from 'react-bootstrap';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to React-Shop</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
