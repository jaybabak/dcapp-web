
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import Link from 'next/link'
import Header from '../comps/Header'
import Layout from '../comps/Layout'
import fetch from 'isomorphic-unfetch'


const Index = (props) => (
  <Layout>

    <style jsx>{`
    	.container {
    		min-height: 1100px;
    		z-index: 2;
    		overflow: hidden;
    		// background-color: red;
    		width: calc(100% - 40px);
    		margin: 0 auto;
    		position: relative;
    	}

      .hero-wrapper {
        position: relative;
      }

    	.left-side {
    		float: left;
    		// padding-top: 150px;
    		width: 50%;
    		display: inline-block
    	}

    	.right-side {

    		float: none;
    		width: 100%;
        margin-left: 100px;
    		padding-top: 40px;
    		// padding: 40px;
    		display: inline-block;
    		// text-align: right;
        max-height: 400px;
        overflow: hidden;
    	}

    	.intro-text {
    		margin-left: 30%;
        width: 80%;

    		margin-top: 75px;
    		font-weight: 700;
    		font-size: 33px;

    	}

    	.subheading {
    		text-align: left;
    		margin-left: 0px;
    		margin-top: 80px;
    		color: white;
    		font-weight: 700;
    		font-size: 38px;


    	}

    	.body-text {
        box-sizing: border-box;
        clear: both;
        width: 100%;
        margin: 0 auto;
        display: block;
        padding: 10px;
        padding-bottom: 60px;
        padding-left: 0;
    		// margin-left: 20px;
    		margin-top: 25px;
    		font-weight: 500;
    		font-size: 16px;
    		color: #777;
        line-height: 1.43;
    	}

    	.white {
    		margin: 0;
    		// margin-left:60px;
    		margin-top: 30px;
    		font-weight: 300;
    		color: white;
    		width: 75%;
    	}

    	img {
    		width: 100%:
        // margin-left: 200px;
    	}

    	.white-square {
    		width:87%;
    		min-height: 400px;
    		// min-height: 60%;
    		position: absolute;
    		right: -70px;
    		right: 7%;
    		top: 50px;

    		background-color: white;
    		z-index: -1;

    		-webkit-box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);
				-moz-box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);
				box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);

    	}

    	.go-to-map {
    		clear: both;
    		background-color: #102D64;
    		// background-color: #2CABFB;
    		width: 90%;
    		min-height: 450px;
    		margin-top: 50px;
    		margin-bottom: 45px;
    		display:inline-block;
    		padding: 30px;
    		padding-top:0;
    		padding-right: 0;
    		padding-bottom: 0;

    		-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
				-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
				box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
    	}

    	.form-field-text {
    		width:65%;
    		display: block;
    		// margin: 0 auto;
    		height: 45px;
    		margin-top: 68px;

        border-radius: 45px;
    		padding-left: 35px;
    		font-weight: 200;
    		// text-align:center;
    		border: 5px solid #2CABFB;

    	}

    	a.cta-link {
        clear: both;
    		display: block;
    		text-align: center;
    		font-weight: 600;
        text-decoration:none;
    		margin: 0 auto;
        margin-top: 40px;
    		margin-bottom:60px;
    		background-color: #102D64;
    		color: white;
    		text-transform: uppercase;
    		// border: 4px solid #2CABFB;
    		width: 40%;
    		padding-left: 60px;
    		padding-right: 60px;
    		padding-top: 13px;
    		padding-bottom: 13px;
    		border-radius: 45px;
    		transition: all 0.4s ease-out;
    		border: 3px solid #ececec;
    	}

    	a.cta-link:hover {
    		-webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
				-moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
				box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
    		background-color: white;
    		color: #2CABFB;
    		border: 3px solid #2CABFB;
    		cursor: pointer;
    	}

      .cta-text-wide {
        display: block;
        // border-top: 2px solid #c8c8c8;
        margin-top: 50px;
        padding-top: 80px;
        font-size: 23px;
        text-align: center;
        line-height: 1.64;

      }

      .cta-text-summary {
        display: block;
        // border-top: 2px solid #c8c8c8;
        margin-top: 40px;
        // padding-top: 80px;
        font-size: 16px;
        text-align: left;
        line-height: 1.64;
      }


      .cta-3-wrapper {
        margin-top: 100px;
      }

      .card {
        border-top: 1px solid #c8c8c8;
        padding-top: 60px;
        padding-bottom: 60px;
      }

      .field-icon {
        width: 100%;
        text-align: center;
      }

      .icon {
        width: 30%;
      }

      .icon-tint {
        width: 22%;
      }

      .field-title {
        margin-top: 30px;
        font-size: 36px;
        text-align: center;
      }

      .field-summary {
        width: 75%;
        margin: 0 auto;
        margin-top: 15px;
        text-align: center;
      }

      .cta-bottom-wrapper {
        // width: 70%;
        // margin: 0 auto;
        background-color: white;
        -webkit-box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
        -moz-box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
        box-shadow: 0px 2px 5px 0px rgba(212,212,212,1);
        padding-bottom: 10px;
        margin-bottom: 150px;
        padding-left: 30px;
        padding-right: 30px;

      }

      .arrow-icon {
        width: 30%;
        float: right;
        margin-bottom: 30px;
        margin-right: 30px;
      }

      @media screen and (min-width: 768px) {
        .cta-text-summary {
          display: block;
          // border-top: 2px solid #c8c8c8;
          margin-top: 40px;
          // padding-top: 80px;
          font-size: 16px;
          text-align: center;
          line-height: 1.64;
        }
        .arrow-icon {
          width: 15%;
          float: right;
          margin-bottom: 30px;
          margin-right: 30px;
        }
      }

      @media screen and (min-width: 902px) {

        .left-side {
          float: left;
          padding-top: 150px;
          width: 50%;
          display: inline-block
        }

        .right-side {

          float: left;
          width: 50%;
          margin-left: inherit;
          max-height: inherit;
          padding-top: 40px;
          // padding: 40px;
          display: inline-block;
          text-align: center;
        }

        .intro-text {
          margin-left: 20%;
          margin-top: 75px;
          font-weight: 700;
          font-size: 63px;

        }


        .go-to-map {
          position: relative;
          clear: both;
          // background-color: #2a63ff;
          // background-color: #2CABFB;
          width: 70%;
          min-height: 450px;
          margin-top: 110px;
          margin-bottom: 75px;
          display:inline-block;
          padding: 60px;
          padding-top:0;
          padding-right: 0;
          padding-bottom: 0;

        }

        .arrow-icon {
          position: absolute;
          right: 0;
          bottom: 0;

        }

        .subheading {
          text-align: left;
          margin-left: 0px;
          margin-top: 80px;
          color: white;
          font-weight: 700;
          font-size: 38px;


        }

        .body-text {
          box-sizing: border-box;
          clear: both;
          width: 60%;
          margin-left: 10%;
          display: inline-block;
          margin-top: 50px;
          font-weight: 500;
          font-size: 23px;
          color: #777;
          padding: 0;
        }

        .white {
          margin: 0;
          // margin-left:60px;
          margin-top: 30px;
          font-weight: 300;
          color: white;
          width: 75%;
        }

        img {
          width: 100%:
        }

        .white-square {
          width:87%;
          min-height: 700px;
          // min-height: 60%;
          position: absolute;
          right: -70px;
          right: 7%;
          top: 140px;

          background-color: white;
          z-index: -1;

          -webkit-box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);
          -moz-box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);
          box-shadow: 1px 77px 103px -71px rgba(153,153,153,1);

        }

        a.cta-link {
          clear: both;
          display: block;
          text-align: center;
          font-weight: 700;
          margin: 0 auto;
          margin-top: 50px;
          margin-bottom:100px;
          background-color: #102D64;
          color: white;
          text-transform: uppercase;
          // border: 4px solid #2CABFB;
          width: 40%;
          padding-left: 120px;
          padding-right: 120px;
          padding-top: 23px;
          padding-bottom: 23px;
          border-radius: 45px;
          transition: all 0.2s;
          border: 3px solid #ececec;
        }

        a.cta-link:hover {
          -webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
          -moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
          box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
          background-color: white;
          color: #2CABFB;
          border: 3px solid #2CABFB;
          cursor: pointer;
        }

        .cta-text-wide {

          display: block;
          margin-top: 70px;
          // padding-top: 80px;
          font-size: 23px;
          text-align: center;
          line-height: 1.64;

        }

        .field-image {
          width: 100%;
        }

        .cta-3-wrapper {
          clear: both;
          width: 85%;
          margin: 0px auto;
          margin-bottom: 0;
        }

        .card {
          width: 33.3333333333367%;
          display: inline-block;
          border-top: none;
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .field-icon {
          width: 100%;
          text-align: left;
        }

        .icon {
          width: 30%;
        }

        .icon-tint {
          width: 19%;
        }

        .field-title {
          margin-top: 30px;
          font-size: 36px;
          text-align: left;
          padding-right:
        }

        .field-summary {
          width: 68%;
          margin-left: 0;
          // margin: 0 auto;
          margin-top: 15px;
          text-align: left;
        }

        .cta-bottom-wrapper {
          padding-left: 20px;
          padding-right: 20px;
          width: 70%;
          margin: 0 auto;
          background-color: white;
          -webkit-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
          -moz-box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
          box-shadow: 1px 72px 126px -71px rgba(153,153,153,1);
          padding-bottom: 10px;
          margin-bottom: 100px;

        }
      }

	`}</style>


	<div className="container">
		<span className="white-square"></span>
    <div className="hero-wrapper">
      <div className="left-side">
      	<div className="intro-text">Get it cleaned without the mess!</div>

      </div>

      <div className="right-side">
      	<img src="/static/cta.jpg" alt="my image" />
      </div>
    </div>

    <div className="body-text">Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences.</div>

    <div className="go-to-map">
			<div className="intro-text subheading">Visit the map to see our list of Dry Cleaners!</div>
			<div className="body-text white">Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences.</div>
      <Link href="/map">
        <a><img className="arrow-icon" src="/static/arrow-right-solid.svg" alt="Icon"/></a>
      </Link>
			{/* <input placeholder="Enter your email to get notified when we near launch!" className="form-field-text" type="text" name="firstname"/> */}
    </div>


    <div className="cta-3-wrapper">
      <div className="card">
        <div className="field-icon"><img className="icon" src="/static/truck-solid.svg" alt="Icon"/></div>
        <div className="field-title">Drop-off / Pick-up</div>
        <div className="field-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor orci, id fauci.</div>
      </div>
      <div className="card">
        <div className="field-icon"><img className="icon-tint" src="/static/tint-solid.svg" alt="Icon"/></div>
        <div className="field-title">Get Them Washed</div>
        <div className="field-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor orci, id fauci.</div>
      </div>
      <div className="card">
        <div className="field-icon"><img className="icon" src="/static/box-open-solid.svg" alt="Icon"/></div>
        <div className="field-title">Recieve Laundry!</div>
        <div className="field-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor orci, id fauci.</div>
      </div>
    </div>



    <div className="cta-bottom-wrapper">
      <div className="cta-text-wide">So, Are You Ready To Sign Up With Us?</div>
      <div className="cta-text-summary">Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences.</div>
      <Link href="/sign-up">
        <a className="cta-link">Sign Me Up!</a>
      </Link>
    </div>

  </div>





  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  // console.log(data);
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index


    // <ul>
    //   {props.shows.map(({show}) => (
    //     <li key={show.id}>
    //       <Link as={`/p/${show.id}`} href={`/post?id=${show.id}&name=${show.name}`}>
    //         <a>{show.name}</a>
    //       </Link>
    //     </li>
    //   ))}
    // </ul>


//     const PostLink = (props) => (
//   <li>
//     <Link as={`/posts/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )


    // <PostLink id="hello-next" title="Hello Next.js"/>
