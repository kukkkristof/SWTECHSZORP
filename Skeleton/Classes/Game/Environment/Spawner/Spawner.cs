namespace SZORPClasses.Classes.Game.Environment.Spawner;

public abstract class Spawner : TimedObject
{
    protected int ID;
    protected float SpawnRate;
    protected float ElapsedTime;
    
    public abstract void Spawn();

    public abstract bool CanSpawn();

    protected abstract int SpawnedCount();

}