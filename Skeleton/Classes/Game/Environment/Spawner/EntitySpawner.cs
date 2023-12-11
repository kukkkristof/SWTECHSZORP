using System.Numerics;

namespace SZORPClasses.Classes.Game.Environment.Spawner;

public class EntitySpawner : Spawner
{

    private float _difficulty;
    private int _maxEntityCount;
    private float _range;
    private Vector2 _position;
    private Entity.Entity[] _creature;
    
    public override void PassTime(float time) { }

    public override void Spawn() { }

    public override bool CanSpawn() { return false; }

    protected override int SpawnedCount() { return 0; }
    
}