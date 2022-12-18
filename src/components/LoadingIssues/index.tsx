import ContentLoader from 'react-content-loader';

export function LoadingIssues() {
  return (
    <>
      <ContentLoader
        speed={2}
        width="100%"
        height={180}
        backgroundColor="#cbdae7"
        foregroundColor="#3294f8"
        style={{
          backgroundColor: '#112131',
          borderRadius: 10
        }}
      >
        <rect x="5%" y="32" rx="3" ry="3" width="200" height="20" />
        <rect x="80%" y="40" rx="3" ry="3" width="80" height="10" />
        <rect x="5%" y="80" rx="3" ry="3" width="90%" height="15" />
        <rect x="5%" y="110" rx="3" ry="3" width="90%" height="15" />
        <rect x="5%" y="140" rx="3" ry="3" width="90%" height="15" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width="100%"
        height={180}
        backgroundColor="#cbdae7"
        foregroundColor="#3294f8"
        style={{
          backgroundColor: '#112131',
          borderRadius: 10
        }}
      >
        <rect x="5%" y="32" rx="3" ry="3" width="200" height="20" />
        <rect x="80%" y="40" rx="3" ry="3" width="80" height="10" />
        <rect x="5%" y="80" rx="3" ry="3" width="90%" height="15" />
        <rect x="5%" y="110" rx="3" ry="3" width="90%" height="15" />
        <rect x="5%" y="140" rx="3" ry="3" width="90%" height="15" />
      </ContentLoader>
    </>
  )
}