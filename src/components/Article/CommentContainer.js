import React from 'react';
import ListErrors from "../ListErrors";
import {Link} from "react-router";
import CommentInput from "./CommentInput";

const CommentContainer = props => {
  if (props.currentUser) {
      return (
        <div className="col-xs-12 col-md-8 offset-md-2">
            <div>
                <ListErrors errors={props.errors} />
                <CommentInput slug={props.slug} currentUser={props.currentUser} />
            </div>
        </div>
      );
  } else {
      return (
        <div className="col-xs-12 col-md-8 offset-md-2">
            <p>
                <Link to="login">Sign in</Link>
                &nbsp;or&nbsp;
                <Link to="register">sign up</Link>
                &nbsp;to add comments on this article.
            </p>

            <CommentList
                comments={props.comments}
                slug={props.slug}
                currentUser={props.currentUser} />
        </div>
      );
  }
};

export default CommentContainer;