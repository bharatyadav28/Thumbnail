import React from "react";

export async function generateMetadata({ params }) {
  // Fetch the video data
  const rVideo = await fetch(
    `https://api.stringgeo.com/api/free-video/get-video/${params.id}`
  );
  const { video } = await rVideo.json();

  // Thumbnail URL Generated
  const thumbnailUrl = `https://dewv7gdonips4.cloudfront.net/${video?.thumbnail_url}`;

  console.log("thumbnailUrl", thumbnailUrl);

  return {
    title: video?.title.substring(0, 100),
    description: video?.description,
    openGraph: {
      type: "video.other",
      title: video?.title,
      description: video?.description,
      images: [
        {
          url: thumbnailUrl,
          width: 1200, // Set standard width
          height: 630, // Set standard height
        },
      ],
      // url: `https://your-domain.com/video/${video.id}`,
      videos: [
        {
          url: video?.video_url,
          width: 1280,
          height: 720,
          type: "video/mp4",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: video.title.substring(0, 70),
      description: video.description?.substring(0, 200),
      image: thumbnailUrl, // Just a single image property, not an array
    },
  };
}

function WebpImagePage({ params }) {
  console.log("params", params);
  return (
    <div>
      <p>This is a webp image page</p>
    </div>
  );
}

export default WebpImagePage;
