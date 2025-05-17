import { Platform, ImageBackground } from "react-native";

const CrossPlatformImageBackground = ({ source, style, imageStyle, children }) => {
  if (Platform.OS === "web") {
    // Web: Use a div with a pseudo-element for the background image
    return (
      <div
        style={{
          ...style,
          position: "relative", // Required for pseudo-element positioning
          overflow: "hidden", // Ensure the pseudo-element doesn't overflow
        }}
      >
        {/* Pseudo-element for the background image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${source.uri})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: imageStyle?.opacity || 1, // Apply opacity from imageStyle
            zIndex: -1, // Ensure the pseudo-element is behind the content
          }}
        />
        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </div>
    );
  } else {
    // Native: Use ImageBackground
    return (
      <ImageBackground source={source} style={style} imageStyle={imageStyle}>
        {children}
      </ImageBackground>
    );
  }
};

export default CrossPlatformImageBackground;