namespace SZORPClasses.Classes.Game.Entity;

public class Fish : Entity
{

    private float _biteChance;
    private float _difficulty;


    private bool DoBite() { return true; }
    // Check if the fish should bite to be catched

    public Item.Item[] Catch() { return null; }
    // If reeled in, kill the entity, and return the fish loot table

    public float Reel() { return 0.0f; }
    // Return the fishes distance from the player


    public override Item.Item[] TakeDamage() { return null;}

    public override void PassTime(float time) { }
}