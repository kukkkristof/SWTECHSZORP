namespace SZORPClasses.Classes.Game.Entity;

public abstract class Entity : TimedObject
{
    protected float MaximumHealth;
    protected float CurrentHealth;
    protected float Strength;
    protected float Armor;
    protected float MovementSpeed;
    protected Item[] LootTable;

    public abstract Item[] TakeDamage();
    // NULL if not killed, LootTable if killed
    
    
    

}