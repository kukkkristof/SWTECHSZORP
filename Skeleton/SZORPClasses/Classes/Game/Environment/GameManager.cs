namespace SZORPClasses.Classes.Game.Environment;

public class GameManager
{
    private int _survivalSize;
    private int _mazeSize;
    private Tile[] _survivalMap;
    private Tile[] _mazeMap;
    private int _tickSpeed;
    private List<TimedObject> _timedObjects;
    private List<Crop> _crops;
    private Settings _settings;

    private void GenerateMap() { }

    private void LoadMap() { }

    public void LoadSave(string Location) { }

    public void SaveGame(string Location) { }

    private void Ready() { }

    private void Process(float delta) { }

    public int GetNextAvailableID() { return 0; }

    private void CreateEntitySpawners(bool inMaze) { }
    
    private void CreateResourceSpawners(bool inMaze) { }

    public void RenderCrop(Crop crop) { }
    
    public void RenderResource(Resource resource) { }

}