import Image from 'next/image';

const Service = ({ title, iconImage, lists }) => {
  return (
    <div className="service">
      <div className="icon">
        <Image src={iconImage} alt={`${title} icon`} />
      </div>
      <h3 className="bg-blue">{title}</h3>
      <ul>
        {lists.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
