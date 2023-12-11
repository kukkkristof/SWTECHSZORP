using SZORPClasses.Classes.Game.Environment;
using SZORPClasses.Classes.Game.Environment;

namespace SZORPClasses.Classes.Game.Entity;

public abstract class Entity : TimedObject
{
    protected float MaximumHealth;
    protected float CurrentHealth;
    protected float Strength;
    protected float Armor;
    protected float MovementSpeed;
    protected Item.Item[]? LootTable;

    public abstract Item.Item[] TakeDamage();
    // NULL if not killed, LootTable if killed
    
    
    

}