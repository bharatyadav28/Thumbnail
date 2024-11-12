import React from "react";

export async function generateMetadata({ params }) {
  // Fetch the video data

  // Thumbnail URL Generated

  const response = await fetch(
    `https://api.stringgeo.com/api/video/get-video-preview/${params.id}`,
    {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
    }
  );

  if (!response.ok) {
    return {};
  }

  const { video } = await response.json();
  console.log("Data ", video);
  // console.log("ID: ", params.id, video);

  // // Thumbnail URL Generated
  const thumbnailUrl = `https://dewv7gdonips4.cloudfront.net/${video.thumbnail_url}`;

  return {
    title: "Video -jpg ",
    description: "jpg image",
    openGraph: {
      type: "video.other",
      title: "jpg image",
      description: "this is a jpg image",
      images: [
        {
          url: thumbnailUrl,
          width: 1200, // Set standard width
          height: 630, // Set standard height
        },
      ],
      // url: `https://your-domain.com/video/${video.id}`,
      // videos: [
      //   {
      //     url: video.video_url,
      //     width: 1280,
      //     height: 720,
      //     type: "video/mp4",
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title: "jpg image",
      description: "this is a jpg image",
      images: [thumbnailUrl],
    },
  };
}

function JpgImagePage({ params }) {
  console.log("params", params);
  return (
    <div>
      <p>This is a jpg image page</p>
    </div>
  );
}

export default JpgImagePage;
