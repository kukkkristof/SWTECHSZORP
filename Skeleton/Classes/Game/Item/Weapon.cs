using SZORPClasses.Classes.Game.Entity;
using SZORPClasses.Classes.Game.Environment;

namespace SZORPClasses.Classes.Game.Item;

public class Weapon : Item
{
    private float _damage;
    private Effect _customEffect;
    private CollisionShape _range;

    public void ApplyEffect() { }
    public void Attack(Entity.Entity target) { }
    public void CheckInRangeEntitites() { }

}