var React = require('react');

class Hello extends React.Component {

  render() {
    console.log('this is sushi from the hello.jsx');

    return (
              <html>
                <body>
                  <h1>hello</h1>
                  <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Hello;