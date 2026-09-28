import { useState } from "react";
import ErrorMessage from "../common/ErrorMessage";
import Loader from "../common/loader";
import PostsLists from "../posts/PostsLists";
import ProfileHeader from "./ProfileHeader";

const UserProfilePresenter = ({
  posts,
  user,
  loading,
  error,
  onRetry,
  onUpdateUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  if (loading) {
    return <Loader message={"Loading user profile page"} />;
  }
  if (error) {
    return (
      <ErrorMessage
        title="Something went wrong"
        message={error}
        onRetry={onRetry}
      />
    );
  }
  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData);
    if (result.success) {
      setIsEditing(false);
    }
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
    }
  };

  const handleInputChange = () => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        onStartEdit={() => setIsEditing(true)}
        onCancelEdit={handleCancelEdit}
        onInputChange={handleInputChange}
        onUpdateUser={handleSaveProfile}
      />
      <PostsLists posts={posts} />
    </div>
  );
};

export default UserProfilePresenter;
