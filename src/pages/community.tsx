import { useState } from "react";
import {
  FaSearch,
  FaBookmark,
  FaComment,
  FaHeart,
  FaPaperPlane,
} from "react-icons/fa";
import img2 from "../assets/flower2.png";
import profileImg from "../assets/DoctorsCard.png";
import userAvatar from "../assets/bullet.png"; // Importing a user avatar image
import Navigation from "../components/navigation";

interface Post {
  id: number;
  author: string;
  date: string;
  title: string;
  content: string;
  fullContent: string;
  likes: number;
  liked: boolean;
  comments: number;
  bookmarks: number;
  userComments: string[];
}

const CommunityPage = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [newComment, setNewComment] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Admin Coral",
      date: "09-12-2024 12:04AM",
      title: "Tips for light period flow",
      content: "Consult your healthcare Provider: Before embarking on any...",
      fullContent: `Consult your healthcare Provider: Before embarking on any medical journey, especially
        concerning reproductive health, it is crucial to ensure that...`,
      likes: 10,
      liked: false,
      comments: 8,
      bookmarks: 54,
      userComments: [],
    },
    {
      id: 2,
      author: "Admin Coral",
      date: "09-12-2024 12:04AM",
      title: "Tips for light period flow",
      content: "Consult your healthcare Provider: Before embarking on any...",
      fullContent: `Some more extended content for the second post...`,
      likes: 5,
      liked: false,
      comments: 3,
      bookmarks: 20,
      userComments: [],
    },
    {
      id: 3,
      author: "Admin Coral",
      date: "09-12-2024 12:04AM",
      title: "Tips for light period flow",
      content: "Consult your healthcare Provider: Before embarking on any...",
      fullContent: `Another long content here, giving more details about the tips...`,
      likes: 12,
      liked: false,
      comments: 4,
      bookmarks: 40,
      userComments: [],
    },
  ]);

  const handleLike = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked,
            }
          : post
      )
    );
  };

  const handleBookmark = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              bookmarks: post.bookmarks
                ? post.bookmarks - 1
                : post.bookmarks + 1,
            }
          : post
      )
    );
  };

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
  };

  const goBackToCommunity = () => {
    setSelectedPostId(null);
  };

  const handleAddComment = (id: number) => {
    if (newComment.trim() !== "") {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id
            ? {
                ...post,
                userComments: [...post.userComments, newComment], // Add new comment
                comments: post.comments + 1, // Increment comment count
              }
            : post
        )
      );
      setNewComment(""); // Clear comment input after submission
    }
  };

  // Find the selected post
  const selectedPost = posts.find((post) => post.id === selectedPostId);

  return (
    <div className="p-4 bg-[#f8f2ff] min-h-screen relative pb-20 overflow-x-hidden">
      {/* Added padding-bottom for navigation */}
      {/* Top Flower Decoration */}
      <div className="absolute -top-8 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>
      {!selectedPostId ? (
        // Community Feed View
        <div>
          {/* Header */}
          <div className="text-center mb-4">
            <h1
              className="text-2xl font-semibold"
              style={{
                color: "rgba(179, 95, 189, 1)",
              }}
            >
              Community
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-2 bg-white p-2 rounded-full mb-4 shadow">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-gray-700 focus:outline-none"
            />
          </div>

          {/* Tabs */}
          <div className="flex justify-between mb-4 text-sm">
            {["new", "all", "popular", "doctors", "diet"].map((tab) => (
              <span
                key={tab}
                onMouseEnter={() => setHoveredTab(tab)}
                onMouseLeave={() => setHoveredTab(null)}
                style={{
                  borderBottom:
                    hoveredTab === tab
                      ? "2px solid rgba(179, 95, 189, 1)"
                      : "none",
                  color: hoveredTab === tab ? "rgba(179, 95, 189, 1)" : "black",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            ))}
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 bg-white rounded-lg shadow-md space-y-2"
                onClick={() => handlePostClick(post.id)} // Navigate to post details
              >
                {/* Post Header */}
                <div className="flex items-center">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>

                {/* Post Content */}
                <div className="text-left">
                  <p className="font-bold">{post.title}</p>
                  <p className="text-gray-600">{post.content}</p>
                </div>

                {/* Post Actions */}
                <div className="flex justify-between text-gray-500 text-sm">
                  <div
                    className="flex items-center space-x-2"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents triggering post click event
                      handleBookmark(post.id);
                    }}
                  >
                    <FaBookmark
                      className={
                        post.bookmarks
                          ? "text-[rgba(179, 95, 189, 1)]"
                          : "text-gray-500"
                      }
                    />
                    <span>{post.bookmarks}</span>
                  </div>
                  <div
                    className="flex items-center space-x-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(post.id);
                    }}
                  >
                    <FaHeart className={post.liked ? "text-red-500" : ""} />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaComment />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        selectedPost && ( // Add a check for selectedPost
          <div>
            {/* Back Button */}
            <div className="mb-4">
              <button
                className="font-semibold"
                onClick={goBackToCommunity}
                style={{
                  color: "rgba(179, 95, 189, 1)",
                }}
              >
                Back to Community
              </button>
            </div>

            <div className="space-y-4">
              {/* Post Header */}
              <div className="flex items-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-2">
                  <p className="font-semibold">{selectedPost.author}</p>
                  <p className="text-xs text-gray-500">{selectedPost.date}</p>
                </div>
              </div>

              {/* Post Content */}
              <div className="text-left">
                <p className="font-bold">{selectedPost.title}</p>
                <p className="text-gray-600">{selectedPost.fullContent}</p>
              </div>

              {/* Comments */}
              <div className="text-left">
                <h2 className="font-bold">Comments</h2>

                {/* Existing Comments */}
                {selectedPost.userComments.length > 0 ? (
                  selectedPost.userComments.map((comment, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 mt-2"
                    >
                      <img
                        src={userAvatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="bg-gray-100 p-2 rounded-md">
                        <p>{comment}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No comments yet.</p>
                )}
              </div>

              {/* Add a New Comment */}
              <div className="flex items-center space-x-2 mt-4">
                <img
                  src={userAvatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                />
                <FaPaperPlane
                  onClick={() => handleAddComment(selectedPost.id)}
                  className="text-[rgba(179, 95, 189, 1)] cursor-pointer"
                />
              </div>
            </div>
          </div>
        )
      )}

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default CommunityPage;
