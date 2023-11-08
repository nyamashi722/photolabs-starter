import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, fetchPhotosByTopicId }) => {
  const topicArray = topics.map((topic) => {
    return (
      <TopicListItem
        {...topic}
        key={topic.id}
        fetchPhotosByTopicId={fetchPhotosByTopicId}
      />
    )
  })

  return (
    <div className="top-nav-bar__topic-list">
      {topicArray}
    </div>
  );
};

export default TopicList;
