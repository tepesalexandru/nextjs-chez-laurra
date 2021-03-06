import React from "react";
import {useRouter} from 'next/router';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import copy from 'copy-to-clipboard'

export default function Share(props) {
  const myRouter = useRouter();
  const shareUrl = "" + props.origin + myRouter.asPath;
  return (
    <div className="relative w-full bg-almond rounded-lg shadow-md pt-6 p-8">
      <h6 className="text-xl md:text-3xl font-bold leading-none mb-4 w-full pr-12">
        {props.title}
      </h6>
      <div className="flex items-center justify-between text-red">
        <div className="flex">
          <FacebookShareButton url={shareUrl} className="mr-2">
            <a className="fStyle rounded-full mr-4" href="#">
              <svg
                className="h-8 w-8"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <a className="fStyle rounded-full" href="#">
              <svg
                className="w-8 h-8"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM17.4791 9.35632C17.4844 9.47443 17.4869 9.59308 17.4869 9.71228C17.4869 13.3519 14.7166 17.5488 9.65021 17.549H9.65039H9.65021C8.09473 17.549 6.64728 17.0931 5.42834 16.3118C5.64386 16.3372 5.86322 16.3499 6.08533 16.3499C7.37585 16.3499 8.56348 15.9097 9.50629 15.1708C8.30054 15.1485 7.28394 14.3522 6.93311 13.2578C7.10101 13.29 7.27368 13.3076 7.45074 13.3076C7.70215 13.3076 7.94568 13.2737 8.17712 13.2105C6.91681 12.9582 5.96741 11.8444 5.96741 10.5106C5.96741 10.4982 5.96741 10.487 5.96777 10.4755C6.33893 10.6818 6.76337 10.806 7.21527 10.8199C6.47571 10.3264 5.98956 9.48285 5.98956 8.52722C5.98956 8.02258 6.12598 7.5498 6.36255 7.14276C7.72083 8.80939 9.75073 9.90546 12.0399 10.0206C11.9927 9.81885 11.9683 9.60864 11.9683 9.39258C11.9683 7.87207 13.2019 6.63849 14.723 6.63849C15.5153 6.63849 16.2308 6.97339 16.7335 7.50879C17.361 7.38501 17.9502 7.15576 18.4825 6.84027C18.2765 7.48315 17.84 8.02258 17.2712 8.36371C17.8284 8.29706 18.3594 8.14929 18.8529 7.92993C18.4843 8.48236 18.0168 8.96759 17.4791 9.35632Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </TwitterShareButton>
        </div>

        <button onClick={() => copy(shareUrl)} className="pButton" href="#">
          Copy Link
        </button>
      </div>
    </div>
  );
}
