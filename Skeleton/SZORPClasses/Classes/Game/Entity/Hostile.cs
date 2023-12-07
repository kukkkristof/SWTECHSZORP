namespace SZORPClasses.Classes.Game.Entity;

public class Hostile : Entity
{
    private CollisionShape _vision;
    private CollisionShape AttackRange;

    private void See() { }
    // Check for entities in the _vision collider
    
    private void Attack(Entity target) {}
    // Move towards the target until in the AttackRange

    public override Item[] TakeDamage()
    {
        return null;
        
    }

}