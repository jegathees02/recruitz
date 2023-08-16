import moviepy.editor as mp
import librosa
import numpy as np

def calculate_boldness(audio_data, sr):
    boldness_metric = np.mean(librosa.feature.zero_crossing_rate(y=audio_data))
    return boldness_metric

def main(video_path):
    
    video = mp.VideoFileClip(video_path)
    audio = video.audio.to_soundarray()
    mono_audio = np.mean(audio, axis=1)
    sr = audio.shape[0] / video.duration    
    boldness = calculate_boldness(mono_audio, sr)

    print(f"Boldness Percentage: {boldness * 1000:.2f}%")

if __name__ == "__main__":
    video_path = "/home/jegathees5555/Documents/recruitz/backend/voice/sample_voice1.mp4"
    main(video_path)
