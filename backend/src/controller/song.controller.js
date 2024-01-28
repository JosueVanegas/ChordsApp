import Song from '../model/song.model.js'

export const getSongs = async(req,res)=>{
    try {
        const data = await Song.find();
        if(!data) return res.status(200).json({message:"query failed"});
        if(data.length == 0) return res.status(200).json({message:"there's no songs yet"})
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(JSON.stringify(error));
    }
}
export const getSong = async(req,res)=>{
    try {
        const _id = req.params.id;
        if(!_id)return res.status(200).json({message:"Missing id, the id param is required"})
        const data = await Song.findById({ _id });
    console.log(data)
        if(!data) return res.status(200).json({message:"query failed"});
        if(data.length == 0)return res.status(200).json({message:"song dont founded"})
        return res.status(200).json(data)
    } catch (error) {
        return console.log(error)
    }
}
export const postSong = async(req,res)=>{
    try {
        const {body,file} = req;
        const newSong = new Song({
            name: body.name,
            artist: body.artist || 'unknow',
            genre: body.genre || 'unknow',
            album: body.album || 'unknow',
            year: parseInt(body.year) || 2000,
            lyric:body.lyric || '',
            chords:body.chords,
            docUrl:file.path || 'none'
        })
        const result = await newSong.save();
        if(!result) return res.status(200).json({message:"bad request"});
        return res.status(200).json({message:"data saved"});
    } catch (error) {
        return res.status(500).json(JSON.stringify(error));
    }
}

export const putSong = async(req,res)=>{
    try {
        
        const {id} = req.params;
        if(!id) return res.status(200).json({message:"Missing id, the id param is required"})
        const {body,file} = req;
        const request = {
            name: body.name,
            artist: body.artist || 'unknow',
            genre: body.genre || 'unknow',
            album: body.album || 'unknow',
            year: parseInt(body.year) || 2000,
            lyric:body.lyric || '',
            chords:body.chords,
            docUrl:file.path || 'none'
        }
        const result = await Song.findByIdAndUpdate(id,request,{new:true})
        if(!result) return res.status(200).json({message:"bad request"});
        return res.status(200).json({success:"song updated"})
    } catch (error) {
        return res.status(500).json(JSON.stringify(error));
    }
}

export const deleteSong = async(req,res)=>{
    try {
        const {id} = req.params
        if (!id) return res.status(200).json({message:'Missing id, the id param is required'});
        const song = await pool.query('DELETE FROM SONG WHERE id=?',[id]);
        if(!song[0].affectedRows) return res.status(200).json({message:"the server can´t deleted the song selected"});
        return res.status(200).json({"success":"song deleted"});
    } catch (error) {
        return res.status(500).json(JSON.stringify(error));
    }
}
