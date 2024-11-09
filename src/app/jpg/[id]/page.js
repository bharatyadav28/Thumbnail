import React from "react";

export async function generateMetadata({ params }) {
  // Fetch the video data

  // Thumbnail URL Generated

  const thumbnailUrl = `https://res.cloudinary.com/djntj8ck7/image/upload/v1691730500/Intensify/Courses/tmp-2-1691730492228_nyvzem.jpg`;

  console.log("thumbnailUrl", thumbnailUrl);

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
      card: "player",
      title: "jpg image",
      description: "this is a jpg image",
      images: [thumbnailUrl],
      //   player: video.video_url,
      playerWidth: 1280,
      playerHeight: 720,
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
