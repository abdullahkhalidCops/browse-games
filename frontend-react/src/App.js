import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Container, Row, Col } from "react-bootstrap";
import TopNavbar from "./components/Navbar";

function App() {
  const url = "/api/games";
  const [gamesInfo, setGamesInfo] = useState([]);
  const fetchGamesInfo = () => {
    try {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((resJson) => setGamesInfo(resJson))
        .catch((error) => {
          console.log("Error fetching games data:", error);
        });
    } catch (err) {
      console.log("Error fetching games data:", err);
    }
  };

  useEffect(() => {
    console.log("fetching games data");
    fetchGamesInfo();
    console.log("fetched games data ");
  }, []);

  return (
    <div className="App bg-dark">
      <TopNavbar/>
      <br/>
      <Container>
        <Row xs={1} md={2} lg={3} className="">
          {gamesInfo.map((gameInfo) => (
            <Col key={gameInfo.id} className="mb-4">
              <Card
                title={gameInfo.title}
                content={gameInfo.short_description}
                thumbnail={gameInfo.thumbnail}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
