import React from "react";
import styles from './HomepageDocumentations.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';


const HomepageDocumentations = () => {
    return (
      <section class='header mb-10 documentations'>
        <div class="row">
          <div class="col-sm-4">
            <div class="card text-dark bg-light mb-5">
            <div class="card-header bg-info text-center text-white"><h4>Knowledege Base</h4></div>
              <div class="card-body ">
                <ul>
                  <li class="card-text text-left">Place some text for Knowledege Base here.</li>
                  <li class="card-text text-left">Place some text for Knowledege Base here.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card text-dark bg-light mb-5">
            <div class="card-header bg-info text-center text-white"><h4>Resources</h4></div>
              <div class="card-body ">
              <ul>
                  <li class="card-text text-left">Place some text for Resources here.</li>
                  <li class="card-text text-left">Place some text for Resources here.</li>
                  <li class="card-text text-left">Place some text for Resources here.</li>
                  <li class="card-text text-left">Place some text for Resources here.</li>
                </ul>
              </div>
              
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card text-dark bg-light mb-5">
            <div class="card-header bg-info text-center text-white"><h4>Developer API</h4></div>
              <div class="card-body ">
              <ul>
                  <li class="card-text text-left">Place some text for Developer API here.</li>
                  <li class="card-text text-left">Place some text for Developer API here.</li>
                </ul>
              </div>
              
            </div>
          </div>
          
          <div class="col-sm-4 mb-5">
            <div class="card text-dark bg-light">
            <div class="card-header bg-info text-center text-white"><h4>Support Request</h4></div>
              <div class="card-body ">
              <ul>
                  <li class="card-text text-left">Place some text for Support Request here.</li>
                  
                </ul>
              </div>
              
            </div>
          </div>
          <div class="col-sm-4 mb-50">
            <div class="card text-dark bg-light ">
            <div class="card-header bg-info text-center text-white"><h4>FAQ</h4></div>
              <div class="card-body ">
              <ul>
                  <li class="card-text text-left">Place some text for the FAQ here.</li>
                  <li class="card-text text-left">Place some text for the FAQ here.</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    )
  }

export default HomepageDocumentations;