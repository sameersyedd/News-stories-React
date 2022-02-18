import React,{useState,useEffect}from 'react';

import {getStory} from '../services/hnApis'
import {StoryTitle, StoryWrapper,StoryMeta, StoryMetaElements} from '../styles/StoryStyles'
export const Story = ({storyId}) => {

    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId)
        .then(data => data && data.url && setStory(data));
    }, [])
    
    return story && story.url?(
    <StoryWrapper data-testid = 'story'>
        <StoryTitle>
        <a href = {story.url}>
            {story.title}
        </a>
        </StoryTitle>
        <StoryMeta>
            <span className="story_by" data-testid = "story-by">
                <StoryMetaElements color="red">By:</StoryMetaElements> {story.by}
            </span>
        </StoryMeta>
    </StoryWrapper>
    ): null;
}