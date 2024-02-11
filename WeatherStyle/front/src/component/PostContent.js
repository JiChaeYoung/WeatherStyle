import styled from 'styled-components';
import React from 'react';

function PostContent({ tags }) {
    const tags2 = tags;
    return (
        <Container>
            <ContentDiv>
                {tags2.map((tag, index) => {
                    if (index > 0) {
                        return `#${tag.name}`;
                    }
                    return null;
                })}
            </ContentDiv>
        </Container>
    );
}

export default PostContent;

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
`;

const ContentDiv = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 80%;
`;