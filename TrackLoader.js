const tracks = [
    "/PolyTrack/tracks/track_8.track"
]
function load(func, v){
    let out = [];
    for (let index = 0; index < tracks.length; index++) {
        out[index] = func(tracks[index], v);  
    }
    return out;
}
//this._loadStandardTrack(PolyTrack/tracks/track_8.track, t)