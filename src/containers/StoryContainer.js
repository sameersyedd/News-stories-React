
import React, { useEffect, useState } from "react"
import {Story} from '../components/Story'
import { getStoryIds } from '../services/hnApis'
import { GlobalStyle, StoriesContainerWrapper } from "../styles/StoriesContainerStyles";

export const StoryContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data))
    }, [])

    return (
    <>
    <GlobalStyle/>
    <StoriesContainerWrapper data-test-id="stories-container">
    <h1>Hacker NEWS top stories</h1>
    {storyIds.map(storyId =>(  <Story key = {storyId} storyId = {storyId}/> ))}
    </StoriesContainerWrapper>
    </>
    );
};
