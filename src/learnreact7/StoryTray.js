export default function StoryTray({ stories }) {
    let tmp_stories = [...stories];

    tmp_stories.push({
      id: 'create',
      label: 'Create Story'
    });
  
    return (
      <ul>
        {tmp_stories.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    );
  }
  