import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
// Create a react component
// Function component - Good for simple content
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name="Vikas"
          datePosted="12:05"
          comment="React app example"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Harish"
          datePosted="12:07"
          comment="Congrats on learning react finally"
        />
      </ApprovalCard>
    </div>
  );
};

// Class component - Good for just about everything else
// class App extends React.Component {
//   render() {
//     return <div></div>;
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
