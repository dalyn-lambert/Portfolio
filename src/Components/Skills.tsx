const Skills = () => {
  return (
    <div className='bg-slate-200 text-black p-2 rounded-md flex flex-col'>
      <span className='font-bold'>Skills</span>
      <div>
        <span className='font-bold'>Languages: </span>
        <span>JavaScript, TypeScript, HTML, CSS, SQL, Python</span>
      </div>
      <div>
        <span className='font-bold'>Frameworks and Libraries: </span>
        <span>Next.js, Remix, TailwindCSS, Prisma, Visx</span>
      </div>
      <div>
        <span className='font-bold'>Tools: </span>
        <span>Git, Notion, PostgreSQL, MySQL</span>
      </div>
    </div>
  );
};
export default Skills;
