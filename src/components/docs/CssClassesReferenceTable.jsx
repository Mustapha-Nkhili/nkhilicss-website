const CssClassesReferenceTable = ({ cssClassesReference }) => {
  return (
    <table className="w-full border-collapse mt-7">
      <thead className="text-left bg-primary">
        <tr>
          <th className="p-3">class</th>
          <th className="p-3">{cssClassesReference.className}</th>
        </tr>
      </thead>
      <tbody>
        {cssClassesReference.tableRows.map(({ cssClass, data }, index) => (
          <tr key={index + cssClass} className="text-light-periwinkle w-full">
            <td className="p-3 text-sm border-b border-b-border-clr border-b-solid lg-min-w-52">
              {cssClass}
            </td>
            <td className="p-3 text-sm border-b border-b-border-clr border-b-solid text-gray lg-min-w-80">
              {data}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CssClassesReferenceTable;
