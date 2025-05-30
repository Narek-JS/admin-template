import { Button, Card, Typography } from "antd";
import type { ReactNode } from "react";

interface IPageLayout {
  onClickAddButton?: () => void;
  children?: React.ReactNode;
  extra?: Array<ReactNode>;
  addButtonTitle?: string;
  title?: ReactNode;
}

const PageLayout: React.FC<IPageLayout> = ({
  onClickAddButton,
  addButtonTitle,
  children,
  title,
  extra,
}) => (
  <div className="flex flex-col gap-4 w-full h-full relative">
    <div className="flex flex-col w-full gap-4">
      {/* First row. Optional (Title, extra elements, add button) */}

      <div className="flex justify-between items-center w-full">
        {/* Page Title */}
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-3">
            {title &&
              (typeof title === "string" ? (
                <Typography.Title style={{ fontSize: 24 }} className=" !mb-0">
                  {title}
                </Typography.Title>
              ) : (
                <div className="flex">{title}</div>
              ))}
          </div>
        </div>

        {/* print extra elements in first row if there is no add button */}
        {!addButtonTitle && extra && (
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex flex-wrap justify-end items-center gap-3">
              {extra.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          </div>
        )}

        {/* Add button */}
        {addButtonTitle && (
          <Button
            onClick={() => onClickAddButton?.()}
            type="primary"
            size="large"
          >
            {addButtonTitle}
          </Button>
        )}
      </div>

      {/* Print Extra under row if there is add button */}
      {addButtonTitle && extra && (
        <div className="flex flex-wrap justify-end items-center gap-3">
          {extra.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      )}
    </div>

    {/* Main content */}
    <Card className="rounded-2xl p-6">{children}</Card>
  </div>
);

export { PageLayout };
