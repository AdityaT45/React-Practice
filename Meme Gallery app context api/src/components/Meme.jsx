
import { MemeContext } from "../store/MemeContext";
import { useContext } from "react";
const Meme = () => {
    const data=useContext(MemeContext)

    return (
        <div className="container mt-5">
          <h1 className="text-center mb-4">Meme Gallery</h1>
          <div className="row">
            {data.map((meme) => (
              <div key={meme.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  {/* Image with dynamic styles for width and height */}
                  <img
                    src={meme.url}
                    className="card-img-top meme-image"
                    alt={meme.name}
                    style={{
                      width: `${meme.width}px`,
                      height: `${meme.height}px`,
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{meme.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Meme;
