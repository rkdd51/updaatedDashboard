import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function TextExample() {
  return (
    <div>
      <Card
        style={{
          width: " 378px",
          height: "174px",
          left: "118px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          top: "345px",
          background: "#FFFFFF",
          borderRadius: "10px"
        }}
      >
        <Card.Body>
          <Card.Title>News</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          position: "absolute",
          width: "378px",
          height: "174px",
          left: "118px",
          top: "607px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px"
        }}
      >
        <Card.Body>
          <Card.Title>News</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          position: "absolute",
          width: "378px",
          height: "174px",
          left: "531px",
          top: "400px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px"
        }}
      >
        <Card.Body>
          <Card.Title>News</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          position: "absolute",
          width: "172px",
          height: "174px",
          left: "531px",
          top: "607px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px"
        }}
      >
        <Card.Body>
          <Card.Title>News</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          position: "absolute",
          width: "172px",
          height: "174px",
          left: "737px",
          top: "607px",

          background: "#FFFFFF",
          boxShadow: " 0px 0px 10px rgba(0, 0, 0, 0.1)",
          bordeRadius: "10px"
        }}
      >
        <Card.Body>
          <Card.Title>News</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          position: "absolute",
          width: "378px",
          height: "384px",
          left: "938px",
          top: "397px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          bordeRadius: "10px"
        }}
      >
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>My HR</Accordion.Header>
            <Accordion.Body>
              <Card
                style={{
                  position: "absolute",
                  width: "71px",
                  height: "71px",
                  left: "961px",
                  top: "538px",
                  background: "#3C96B4",
                  borderRadius: "10px"
                }}
              >
                This is a card
              </Card>
              <div
                style={{
                  position: "absolute",
                  left: "66.32%",
                  right: "27.92%",
                  top: "59.86%",
                  bottom: "37.89%",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "14px",
                  textAlign: "center",
                  color: "#000000"
                }}
              >
                My Personal Info
              </div>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </div>
  );
}

export default TextExample;
