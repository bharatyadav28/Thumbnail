import React from "react";

export async function generateMetadata({ params }) {
  // Fetch the video data

  // Thumbnail URL Generated
  const thumbnailUrl = `https://dewv7gdonips4.cloudfront.net/uploads/user-668e5194d73df6053315bb41/profile/1726149063451-16.RepublicMovieDirectorDEVAKATTA[Talk]withStringVinodh_Promo-(1080p).jpg.webp`;

  console.log("thumbnailUrl", thumbnailUrl);

  return {
    title: "Video -web p ",
    description: "web p image",
    openGraph: {
      type: "video.other",
      title: "web p image",
      description: "this is a web p image",
      images: [
        {
          url: thumbnailUrl,
          width: 1200, // Set standard width
          height: 630, // Set standard height
        },
      ],
      //   url: `https://your-domain.com/video/${video.id}`,
      //   videos: [
      //     {
      //       url: video.video_url,
      //       width: 1280,
      //       height: 720,
      //       type: "video/mp4",
      //     },
      //   ],
    },
    twitter: {
      card: "player",
      title: "web p image",
      description: "this is a web p image",
      images: [thumbnailUrl],
      //   player: video.video_url,
      playerWidth: 1280,
      playerHeight: 720,
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
