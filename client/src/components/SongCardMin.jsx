const SongCardMin = ({
    name:'',
    artist: '',
    genre: '',
    album: '',
    year: ''
    }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{artist}</h3>
            <p>{album}</p>
            <p>{genre} - {year}</p>
        </div>
    );
}
 
export default SongCardMin;