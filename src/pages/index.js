import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../styles/bootstrap-responsive.min.css"
import "../styles/bootstrap.css"

import upspot from "../img/test/7upspot.gif"
import ie_logo from "../img/test/ie_logo.gif"
import ns_logo from "../img/test/ns_logo.gif"
import noframes from "../img/test/noframes.gif"
import notepad from "../img/test/notepad.gif"
import yahooweek from "../img/test/yahooweek.gif"
import community from "../img/test/community.gif"
import wabwalk from "../img/test/wabwalk.gif"
import webtrips from "../img/test/webtrips.gif"
import hot from "../img/test/hot.gif"
import newgif from "../img/test/new.gif"
import mchammer from "../img/test/mchammer.gif"
import spinningearth from "../img/test/spinningearth.gif"
import emailme from "../img/test/emailme.gif"
import construction from "../img/test/construction.gif"
import new2 from "../img/test/new2.gif"
import geocities from "../img/test/geocities.jpg"
import hacker from "../img/test/hacker.gif"
import counter2 from "../img/test/counter2.gif"
import drudgesiren from "../img/test/drudgesiren.gif"


export default function Home() {
  return (
    <>
      <Helmet>
        <title>bandfest.org</title>
        <Link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <main>
        <body id="top" class="preview" data-spy="scroll" data-target=".subnav" data-offset="80">
          {/* <!-- Navbar
      ================================================== --> */}
    
    <div class="navbar ">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="">bandfest</a>
          <div class="nav-collapse" id="main-menu">
            <ul class="nav" id="main-menu-left">
              <li class="dropdown" id="preview-menu">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Download <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a target="_blank" href="swatch/bootstrap.min.css">bootstrap.min.css</a>
                  </li>
                  <li>
                    <a target="_blank" href="swatch/bootstrap.css">bootstrap.css</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a target="_blank" href="swatch/variables.less">variables.less</a>
                  </li>
                  <li>
                    <a target="_blank" href="swatch/bootswatch.less">bootswatch.less</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://github.com/">GitHub</a>
              </li>
              <li>
                <a href="http://www.websitegoodies.com/guestbook.php?a=view&id=930308" target="_blank">Guestbook</a>
              </li>
            </ul>
            <ul class="nav pull-right" id="main-menu-right">
              <li>
                <a rel="tooltip" target="_blank" href="http://www.neocities.org" title="Static Web Hosting">Free Static Web Hosting <i class="icon-share-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container" >
      {/*       <!-- Masthead
  ================================================== --> */}
      <header class="jumbotron subhead" id="overview">
        <div class="row">
          <div class="span6">
            <h1>
            <img src={upspot} alt="7upspot.gif" />&nbsp; 
              <text style={{color: '#FF0000'}}>B</text>
              <text style={{color: '#FF5A00'}}>a</text>
              <text style={{color: '#FFB400'}}>n</text>
              <text style={{color: '#FFff00'}}>d</text>
              <text style={{color: '#A5ff00'}}>f</text>
              <text style={{color: '#4Bff00'}}>e</text>
              <text style={{color: '#00ff00'}}>s</text>
              <text style={{color: '#00ff5A0'}}>t</text>
              <blink>
              <text style={{color: '#00ffB4'}}>.</text>
              <text style={{color: '#00ffff'}}>o</text>
              <text style={{color: '#00B4ff'}}>r</text>
              <text style={{color: '#005Aff'}}>g</text>
              </blink>
              </h1>
                <p class="lead">A theme for Gatsby, from Twitter Bootstrap.</p>
                <table cellpadding="2" cellspacing="2">
                  <tr>
                    <td>
                      <img src={ie_logo} alt="ie_logo.gif" />
                    </td>
                    <td>
                    <img src={ns_logo} alt="ns_logo.gif" />
                    </td>
                    <td>
                    <img src={noframes} alt="noframes.gif" />
                    </td>
                    <td>
                    <img src={notepad} alt="notepad.gif" />
                    </td>
                  </tr>
                </table>
          </div>
          <div class="span6">
            <center>
            <img src={yahooweek} alt="yahooweek.gif" />
            <img src={community} alt="community.gif" />
            <img src={wabwalk} alt="wabwalk.gif" />
            <img src={webtrips} alt="webtrips.gif" />
            </center>
          </div>
        </div>
        <marquee>To get started, download the "bootstrap.css" or "bootstrap.min.css" file and include it in your HTML webpage &lt;head&gt; tag: &lt;link href="bootstrap.css" rel="stylesheet"&gt;</marquee>
        <div class="subnav">
          <ul class="nav nav-pills">
            <li>
              <a href="#typography">Typography</a>
            </li>
            <li>
              <a href="#navbar">Navbar</a>
            </li>
            <li>
              <a href="#buttons">
              <img src={hot} alt="hot.gif" /> Buttons </a>
            </li>
            <li>
              <a href="#forms">Forms</a>
            </li>
            <li>
              <a href="#tables">Tables</a>
            </li>
            <li>
              <a href="#miscellaneous">
              <img src={newgif} alt="new.gif" /> Miscellaneous </a>
            </li>
          </ul>
        </div>
      </header>
                {/* <!-- Typography
  ================================================== -->*/}
      
      <section id="typography" style={{paddingTop: '0'}}>
        <div class="page-header">
          <h1>Typography</h1>
        </div>
           {/* <!-- Headings & Paragraph Copy --> */}
        
        <div class="row">
          <div class="span4">
            <div class="well">
              <h1>h1. Heading 1</h1>
              <h2>h2. Heading 2</h2>
              <h3>h3. Heading 3</h3>
              <h4>h4. Heading 4</h4>
              <h5>h5. Heading 5</h5>
              <h6>h6. Heading 6</h6>
            </div>
          </div>
          <div class="span4">
            <h3>Example body text</h3>
            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.</p>
          </div>
          <div class="span4">
            <h3>Example addresses</h3>
            <address>
            <img src={spinningearth} alt="spinningearth.gif" />&nbsp; <strong>Twitter, Inc.</strong>
              <br /> 795 Folsom Ave, Suite 600 <br /> San Francisco, CA 94107 <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <address>
              <strong>Full Name</strong>
              <br />
              <a href="mailto:#" />
              <img src={emailme} alt="emailme.gif" />
            </address>
          </div>
        </div>
        <div class="row">
          <div class="span6">
            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <small>Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </blockquote>
          </div>
          <div class="span6">
            <blockquote class="pull-right">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <small>Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </blockquote>
          </div>
        </div>
      </section>
      <br />
      <br />
      <center>
        {/* <!-- TRIPLE MC HAMMER -->  */}
        <img src={mchammer} alt="mchammer.gif" />&nbsp;&nbsp; 
        <img src={mchammer} alt="mchammer.gif" />&nbsp;&nbsp; 
        <img src={mchammer} alt="mchammer.gif" />
      </center>
       {/*      <!-- Navbar
  ================================================== --> */}
 
      <section id="navbar" style={{paddingTop: '0'}}>
        <div class="page-header">
          <h1>Navbars</h1>
        </div>
        <div class="navbar">
          <div class="navbar-inner">
            <div class="container" style={{width: 'auto'}}>
              <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </a>
              <a class="brand" href="#">Project name</a>
              <div class="nav-collapse">
                <ul class="nav">
                  <li class="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#">Action</a>
                      </li>
                      <li>
                        <a href="#">Another action</a>
                      </li>
                      <li>
                        <a href="#">Something else here</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="#">Separated link</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="navbar-search pull-left" action="">
                  <input type="text" class="search-query span2" placeholder="Search" />
                </form>
                <ul class="nav pull-right">
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li class="divider-vertical"></li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#">Action</a>
                      </li>
                      <li>
                        <a href="#">Another action</a>
                      </li>
                      <li>
                        <a href="#">Something else here</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="#">Separated link</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* <!-- /.nav-collapse -->  */}
            </div>
          </div>
           {/* <!-- /navbar-inner -->  */}
        </div>
        {/* <!-- /navbar --> */}
        <div class="navbar navbar-inverse">
          <div class="navbar-inner">
            <div class="container" style={{width: 'auto'}}>
              <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </a>
              <a class="brand" href="#">Project name</a>
              <div class="nav-collapse">
                <ul class="nav">
                  <li class="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#">Action</a>
                      </li>
                      <li>
                        <a href="#">Another action</a>
                      </li>
                      <li>
                        <a href="#">Something else here</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="#">Separated link</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="navbar-search pull-left" action="">
                  <input type="text" class="search-query span2" placeholder="Search" />
                </form>
                <ul class="nav pull-right">
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li class="divider-vertical"></li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#">Action</a>
                      </li>
                      <li>
                        <a href="#">Another action</a>
                      </li>
                      <li>
                        <a href="#">Something else here</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="#">Separated link</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              {/* <!-- /.nav-collapse -->  */}
            </div>
          </div>
           {/* <!-- /navbar-inner -->  */}
        </div>
         {/* <!-- /navbar --> */}
      </section>
      <br />
      <br />
      <br />
      <center>
        {/* <!-- TRIPLE MC HAMMER -->  */}
        <img src={mchammer} alt="mchammer.gif" />&nbsp;&nbsp; 
        <img src={mchammer} alt="mchammer.gif" />&nbsp;&nbsp; 
        <img src={mchammer} alt="mchammer.gif" />
      </center>
       {/*        <!-- Buttons
  ================================================== --> */}

      <section id="buttons" style={{paddingTop: 0}}>
        <div class="page-header">
          <h1>Buttons</h1>
        </div>
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Button</th>
              <th>Large Button</th>
              <th>Small Button</th>
              <th>Disabled Button</th>
              <th>Button with Icon</th>
              <th>Split Button</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a class="btn" href="#">Default</a>
              </td>
              <td>
                <a class="btn btn-large" href="#">Default</a>
              </td>
              <td>
                <a class="btn btn-small" href="#">Default</a>
              </td>
              <td>
                <a class="btn disabled" href="#">Default</a>
              </td>
              <td>
                <a class="btn" href="#">
                  <i class="icon-cog"></i> Default </a>
              </td>
              <td>
                <div class="btn-group">
                  <a class="btn" href="#">Default</a>
                  <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /btn-group --> */}
              </td>
            </tr>
            <tr>
              <td>
                <a class="btn btn-primary" href="#">Primary</a>
              </td>
              <td>
                <a class="btn btn-primary btn-large" href="#">Primary</a>
              </td>
              <td>
                <a class="btn btn-primary btn-small" href="#">Primary</a>
              </td>
              <td>
                <a class="btn btn-primary disabled" href="#">Primary</a>
              </td>
              <td>
                <a class="btn btn-primary" href="#">
                  <i class="icon-shopping-cart icon-white"></i> Primary </a>
              </td>
              <td>
                <div class="btn-group">
                  <a class="btn btn-primary" href="#">Primary</a>
                  <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
                 {/* <!-- /btn-group --> */}
              </td>
            </tr>
            <tr>
              <td>
                <a class="btn btn-info" href="#">Info</a>
              </td>
              <td>
                <a class="btn btn-info btn-large" href="#">Info</a>
              </td>
              <td>
                <a class="btn btn-info btn-small" href="#">Info</a>
              </td>
              <td>
                <a class="btn btn-info disabled" href="#">Info</a>
              </td>
              <td>
                <a class="btn btn-info" href="#">
                  <i class="icon-exclamation-sign icon-white"></i> Info </a>
              </td>
              <td>
                <div class="btn-group">
                  <a class="btn btn-info" href="#">Info</a>
                  <a class="btn btn-info dropdown-toggle" data-toggle="dropdown" href="#">
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /btn-group --> */}
              </td>
            </tr>
            <tr>
              <td>
                <a class="btn btn-success" href="#">Success</a>
              </td>
              <td>
                <a class="btn btn-success btn-large" href="#">Success</a>
              </td>
              <td>
                <a class="btn btn-success btn-small" href="#">Success</a>
              </td>
              <td>
                <a class="btn btn-success disabled" href="#">Success</a>
              </td>
              <td>
                <a class="btn btn-success" href="#">
                  <i class="icon-ok icon-white"></i> Success </a>
              </td>
              <td>
                <div class="btn-group">
                  <a class="btn btn-success" href="#">Success</a>
                  <a class="btn btn-success dropdown-toggle" data-toggle="dropdown" href="#">
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /btn-group --> */}
              </td>
            </tr>
            <tr>
              <td>
                <a class="btn btn-warning" href="#">Warning</a>
              </td>
              <td>
                <a class="btn btn-warning btn-large" href="#">Warning</a>
              </td>
              <td>
                <a class="btn btn-warning btn-small" href="#">Warning</a>
              </td>
              <td>
                <a class="btn btn-warning disabled" href="#">Warning</a>
              </td>
              <td>
                <a class="btn btn-warning" href="#">
                  <i class="icon-warning-sign icon-white"></i> Warning </a>
              </td>
              <td>
                <div class="btn-group">
                  <a class="btn btn-warning" href="#">Warning</a>
                  <a class="btn btn-warning dropdown-toggle" data-toggle="dropdown" href="#">
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
               {/* <!-- /btn-group --> */}
              </td>
            </tr>
            <tr>
              <td>
                <a class="btn btn-danger" href="#">Danger</a>
              </td>
              <td>
                <a class="btn btn-danger btn-large" href="#">Danger</a>
              </td>
              <td>
                <a class="btn btn-danger btn-small" href="#">Danger</a>
              </td>
              <td>
                <a class="btn btn-danger disabled" href="#">Danger</a>
              </td>
              <td>
                <a class="btn btn-danger" href="#">
                  <i class="icon-remove icon-white"></i> Danger </a>
              </td>
              <td>
                <div class="btn-group">
                  <a class="btn btn-danger" href="#">Danger</a>
                  <a class="btn btn-danger dropdown-toggle" data-toggle="dropdown" href="#">
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /btn-group --> */}
              </td>
            </tr>
            <tr>
              <td>
                <a class="btn btn-inverse" href="#">Inverse</a>
              </td>
              <td>
                <a class="btn btn-inverse btn-large" href="#">Inverse</a>
              </td>
              <td>
                <a class="btn btn-inverse btn-small" href="#">Inverse</a>
              </td>
              <td>
                <a class="btn btn-inverse disabled" href="#">Inverse</a>
              </td>
              <td>
                <a class="btn btn-inverse" href="#">
                  <i class="icon-random icon-white"></i> Inverse </a>
              </td>
              <td>
                <div class="btn-group">
                  <a class="btn btn-inverse" href="#">Inverse</a>
                  <a class="btn btn-inverse dropdown-toggle" data-toggle="dropdown" href="#">
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /btn-group --> */}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/*   <!-- Forms
  ================================================== --> */}
      <section id="forms">
        <div class="page-header">
          <h1>Forms</h1>
        </div>
        <div class="row">
          <div class="span7 offset1">
            <form class="well form-search">
              <input type="text" class="input-medium search-query" />
              <button type="submit" class="btn">Search</button>
            </form>
            <form class="well form-search">
              <input type="text" class="input-small" placeholder="Email" />
              <input type="password" class="input-small" placeholder="Password" />
              <button type="submit" class="btn">Go</button>
            </form>
            <form class="form-horizontal well">
              <fieldset>
                <legend>Controls Bootstrap supports</legend>
                <div class="control-group">
                  <label class="control-label" for="input01">Text input</label>
                  <div class="controls">
                    <input type="text" class="input-xlarge" id="input01" />
                    <p class="help-block">In addition to freeform text, any HTML5 text-based input appears like so.</p>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="optionsCheckbox">Checkbox</label>
                  <div class="controls">
                    <label class="checkbox">
                      <input type="checkbox" id="optionsCheckbox" value="option1" /> Option one is this and that&mdash;be sure to include why it's great </label>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="select01">Select list</label>
                  <div class="controls">
                    <select id="select01">
                      <option>something</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="multiSelect">Multicon-select</label>
                  <div class="controls">
                    <select multiple="multiple" id="multiSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="fileInput">File input</label>
                  <div class="controls">
                    <input class="input-file" id="fileInput" type="file" />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="textarea">Textarea</label>
                  <div class="controls">
                    <textarea class="input-xlarge" id="textarea" rows="3"></textarea>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="focusedInput">Focused input</label>
                  <div class="controls">
                    <input class="input-xlarge focused" id="focusedInput" type="text" value="This is focused…" />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label">Uneditable input</label>
                  <div class="controls">
                    <span class="input-xlarge uneditable-input">Some value here</span>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="disabledInput">Disabled input</label>
                  <div class="controls">
                    <input class="input-xlarge disabled" id="disabledInput" type="text" placeholder="Disabled input here…" disabled />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="optionsCheckbox2">Disabled checkbox</label>
                  <div class="controls">
                    <label class="checkbox">
                      <input type="checkbox" id="optionsCheckbox2" value="option1" disabled /> This is a disabled checkbox </label>
                  </div>
                </div>
                <div class="control-group warning">
                  <label class="control-label" for="inputWarning">Input with warning</label>
                  <div class="controls">
                    <input type="text" id="inputWarning" />
                    <span class="help-inline">Something may have gone wrong</span>
                  </div>
                </div>
                <div class="control-group error">
                  <label class="control-label" for="inputError">Input with error</label>
                  <div class="controls">
                    <input type="text" id="inputError" />
                    <span class="help-inline">Please correct the error</span>
                  </div>
                </div>
                <div class="control-group success">
                  <label class="control-label" for="inputSuccess">Input with success</label>
                  <div class="controls">
                    <input type="text" id="inputSuccess" />
                    <span class="help-inline">Woohoo!</span>
                  </div>
                </div>
                <div class="control-group success">
                  <label class="control-label" for="selectError">Select with success</label>
                  <div class="controls">
                    <select id="selectError">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <span class="help-inline">Woohoo!</span>
                  </div>
                </div>
                <div class="form-actions">
                  <button type="submit" class="btn btn-primary">Save changes</button>
                  <button type="reset" class="btn">Cancel</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      {/*   <!-- Tables
  ================================================== --> */}
    
      <section id="tables">
        <div class="page-header">
          <h1>Tables</h1>
        </div>
        <center>
        <img src={construction} alt="construction.gif" />
        </center>
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </section>
            {/*        <!-- Miscellaneous
  ================================================== --> */}
      <section id="miscellaneous">
        <div class="page-header">
          <h1>Miscellaneous <img src="img/test/new2.gif" />
          </h1>
        </div>
        <div class="row">
          <div class="span4">
            <h3 id="breadcrumbs">Breadcrumbs</h3>
            <ul class="breadcrumb">
              <li class="active">Home</li>
            </ul>
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
                <span class="divider">/</span>
              </li>
              <li>
                <a href="#">Library</a>
                <span class="divider">/</span>
              </li>
              <li class="active">Data</li>
            </ul>
          </div>
          <div class="span4">
            <h3 id="pagination">Pagination</h3>
            <div class="pagination">
              <ul>
                <li>
                  <a href="#">&larr;</a>
                </li>
                <li class="active">
                  <a href="#">10</a>
                </li>
                <li class="disabled">
                  <a href="#">...</a>
                </li>
                <li>
                  <a href="#">20</a>
                </li>
                <li>
                  <a href="#">&rarr;</a>
                </li>
              </ul>
            </div>
            <div class="pagination pagination-centered">
              <ul>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="span4">
            <h3 id="pager">Pagers</h3>
            <ul class="pager">
              <li>
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
            <ul class="pager">
              <li class="previous disabled">
                <a href="#">&larr; Older</a>
              </li>
              <li class="next">
                <a href="#">Newer &rarr;</a>
              </li>
            </ul>
          </div>
        </div>
                   {/*               <!-- Navs
    ================================================== --> */}

        <div class="row">
          <div class="span4">
            <h3 id="tabs">Tabs</h3>
            <ul class="nav nav-tabs">
              <li class="active">
                <a href="#A" data-toggle="tab">Section 1</a>
              </li>
              <li>
                <a href="#B" data-toggle="tab">Section 2</a>
              </li>
              <li>
                <a href="#C" data-toggle="tab">Section 3</a>
              </li>
            </ul>
            <div class="tabbable">
              <div class="tab-content">
                <div class="tab-pane active" id="A">
                  <p>I'm in Section A.</p>
                </div>
                <div class="tab-pane" id="B">
                  <p>Howdy, I'm in Section B.</p>
                </div>
                <div class="tab-pane" id="C">
                  <p>What up girl, this is Section C.</p>
                </div>
              </div>
            </div>
                        {/*         <!-- /tabbable --> */}
           
          </div>
          <div class="span4">
            <h3 id="pills">Pills</h3>
            <ul class="nav nav-pills">
              <li class="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Dropdown <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </ul>
              </li>
              <li class="disabled">
                <a href="#">Disabled link</a>
              </li>
            </ul>
          </div>
          <div class="span4">
            <h3 id="list">Lists</h3>
            <div class="well" style={{padding: '8px 0'}}>
              <ul class="nav nav-list">
                <li class="nav-header">List header</li>
                <li class="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Library</a>
                </li>
                <li>
                  <a href="#">Applications</a>
                </li>
                <li class="nav-header">Another list header</li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
         {/*             <!-- Labels
  ================================================== --> */}
    
        <div class="row">
          <div class="span6">
            <h3 id="labels">Labels</h3>
            <span class="label">Default</span>
            <span class="label label-success">Success</span>
            <span class="label label-warning">Warning</span>
            <span class="label label-important">Important</span>
            <span class="label label-info">Info</span>
            <span class="label label-inverse">Inverse</span>
          </div>
          <div class="span6">
            <h3 id="badges">Badges</h3>
            <span class="badge">Default</span>
            <span class="badge badge-success">Success</span>
            <span class="badge badge-warning">Warning</span>
            <span class="badge badge-important">Important</span>
            <span class="badge badge-info">Info</span>
            <span class="badge badge-inverse">Inverse</span>
          </div>
        </div>
        <br />
         {/*              <!-- Progress bars
  ================================================== --> */}
       
        <h3 id="progressbars">Progress bars</h3>
        <div class="row">
          <div class="span4">
            <div class="progress">
              <div class="bar" style={{width: '60%'}}></div>
            </div>
          </div>
          <div class="span4">
            <div class="progress progress-info progress-striped">
              <div class="bar" style={{width: '20%'}}></div>
            </div>
          </div>
          <div class="span4">
            <div class="progress progress-danger progress-striped active">
              <div class="bar" style={{width: '45%'}}></div>
            </div>
          </div>
        </div>
        <br />
         {/*          <!-- Alerts & Messages
  ================================================== --> */}
      
        <h3 id="alerts">Alerts</h3>
        <div class="row">
          <div class="span12">
            <div class="alert alert-block">
              <a class="close">&times;</a>
              <img src={drudgesiren} alt="drudgesiren.gif" />
              <h4 class="alert-heading">Alert block</h4>
              <p>Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="span4">
            <div class="alert alert-error">
              <a class="close">&times;</a>
              <strong>Error</strong> Change a few things up and try submitting again.
            </div>
          </div>
          <div class="span4">
            <div class="alert alert-success">
              <a class="close">&times;</a>
              <strong>Success</strong> You successfully read this important alert message.
            </div>
          </div>
          <div class="span4">
            <div class="alert alert-info">
              <a class="close">&times;</a>
              <strong>Information</strong> This alert needs your attention, but it's not super important.
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
               {/*                <!-- Footer
        ================================================== --> */}
      

      <footer class="footer">
        <p class="pull-left" style={{marginTop: '-14px'}}>
        <img src={geocities} alt="geocities.jpg" />
        </p>
        <p class="pull-right" style={{marginTop: '-14px'}}>
        <img src={hacker} alt="hacker.gif" />&nbsp; Built with <a href="http://bootswatch.com">Bootswatch</a>
        </p>
      </footer>
      <center>
      <img src={counter2} alt="counter2.gif" />
      </center>
    </div>
     {/*  <!-- /container -->  */}
  </body>
      </main>
    </>
  )
}


