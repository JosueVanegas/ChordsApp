import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
        name:String,
        artist: String,
        genre: String,
        album: String,
        year: Number,
        lyric:String,
        chords:String,
        docUrl:String,
        songUrl:String
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('Song', songSchema);
