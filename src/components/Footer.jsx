// eslint-disable-next-line no-unused-vars
import React from 'react';

function Footer() {
  return (
    <div className="bg-black">
      <div className="container text-white-50">
        <div className="row pt-5">
          <div className="col-lg-6 pe-lg-5 about" id="about">
            <h1 className="text-white fs-4">About</h1>
            <p className="pt-3">
              OlaMovies.Top collects the highest quality movies and tv series from the globe and
              shares them as Google Drive files for the fastest download experience. Enjoy awesome
              quality contents only on OlaMovies.Top
            </p>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <p>
              Join Our<span>: </span>
              <a href="#" className="text-white-50">
                Telegram Channel
              </a>
            </p>

            <p>Main Domain:</p>
            <p>
              <a href="#" className="text-white-50">
                olamovies.top
              </a>
            </p>
            <p>Temporary Domain:</p>
            <p>
              <a href="#" className="text-white-50">
                olamovies.rent
              </a>{' '}
              (Active)
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <hr className="text-white-50" />
        <p className="text-white-50 copyright text-center">
          Copyright © 2024. Created by Nidheesh SN. Powered by React
        </p>
      </div>
    </div>
  );
}

export default Footer;
