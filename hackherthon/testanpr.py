import cv2

# Load the grayscale image
image = cv2.imread('younghpbg.jpg', cv2.IMREAD_GRAYSCALE)

# Apply preprocessing steps if needed (e.g., smoothing, thresholding)

# Apply contour detection
contours, _ = cv2.findContours(image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Iterate through detected contours
for contour in contours:
    # Calculate the bounding box of the contour
    x, y, w, h = cv2.boundingRect(contour)
    
    # Filter contours based on aspect ratio and area (adjust thresholds as needed)
    aspect_ratio = float(w) / h
    contour_area = cv2.contourArea(contour)
    if aspect_ratio > 2 and aspect_ratio < 5 and contour_area > 1000:
        # Draw the bounding box around the contour
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)

# Display the result
cv2.imshow('Number Plate Detection', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
