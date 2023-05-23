import cloudinary from "../cloudinaryConfig";

export const uploadImage = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			const dataUrl = reader.result as string;
			cloudinary.v2.uploader.upload(
				dataUrl,
				{ folder: "find_job_images_uploads" },
				(error, result) => {
					if (error) {
						reject(error);
					} else {
						const secureUrl = result?.secure_url;
						if (secureUrl) {
							resolve(secureUrl);
						} else {
							reject(new Error("Image upload failed."));
						}
					}
				},
			);
		};
		reader.onerror = (error) => {
			reject(error);
		};
		reader.readAsDataURL(file);
	});
};

export const deleteImage = (publicId: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		cloudinary.v2.uploader.destroy(publicId, (error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
};
