import cocktailsImage from "@/assets/cocktails-service.jpg";
import wineImage from "@/assets/wine-service.jpg";

const Gallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Naša Práca
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pohľad na niektoré z našich realizácií
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <img 
              src={cocktailsImage} 
              alt="Cocktail Service" 
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">Cocktail Bar</h3>
              <p className="text-primary-foreground/90">Profesionálne miešané nápoje</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <img 
              src={wineImage} 
              alt="Wine Service" 
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">Vinný Servis</h3>
              <p className="text-primary-foreground/90">Prémiové vína pre každú príležitosť</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
