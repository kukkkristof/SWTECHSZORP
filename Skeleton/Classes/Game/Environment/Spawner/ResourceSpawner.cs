using SZORPClasses.Classes.Game.Item;

namespace SZORPClasses.Classes.Game.Environment.Spawner;

public class ResourceSpawner : Spawner
{
    private Resource _contains;
    private Tile[] _area;
    private int _richness;
    
    public override void PassTime(float time) { }

    public override void Spawn() { }

    public override bool CanSpawn() { return false; }

    protected override int SpawnedCount() { return 0; }
    
}